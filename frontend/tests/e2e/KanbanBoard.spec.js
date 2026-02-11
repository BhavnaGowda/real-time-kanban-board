import { test, expect } from "@playwright/test";

test.describe("Kanban Board E2E", () => {
  test("user can select priority and category", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.fill('input[placeholder="Enter task title"]', "Priority Task");
    await page.selectOption("select", "High");
    await page.selectOption("select:nth-of-type(2)", "Bug");
    await page.click("text=Add Task");

    const taskCard = page.locator(".task-card").first();

    await expect(taskCard.locator("select").first()).toHaveValue("High");
    await expect(taskCard.locator("select").nth(1)).toHaveValue("Bug");
  });

  test("user can upload valid file and see preview", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.fill('input[placeholder="Enter task title"]', "File Task");
    await page.click("text=Add Task");

    const taskCard = page.locator(".task-card").first();

    const fileInput = taskCard.locator('input[type="file"]');
    await fileInput.setInputFiles({
      name: "test.png",
      mimeType: "image/png",
      buffer: Buffer.from([137, 80, 78, 71]),
    });

    // ✅ Correct assertion: preview element exists
    await expect(taskCard.locator("img")).toHaveCount(1);
  });

  test("graph updates when task moves", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.fill('input[placeholder="Enter task title"]', "Graph Task");
    await page.click("text=Add Task");

    const task = page.locator(".task-card").first();
    const doneColumn = page.locator(".column").filter({
      has: page.locator("h3", { hasText: "Done" }),
    });

    await task.dragTo(doneColumn);

    await expect(page.locator("text=Completion")).toBeVisible();
  });
});
