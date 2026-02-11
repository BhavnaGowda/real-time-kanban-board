import { test, expect } from "@playwright/test";

test("user can create and move a task", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Create task
  await page.fill('input[placeholder="Enter task title"]', "E2E Task");
  await page.click("text=Add Task");

  // Verify task appears
  await expect(page.locator("text=E2E Task")).toBeVisible();

  // Move task to In Progress
  await page.click("text=In Progress");
  await expect(page.locator("text=E2E Task")).toBeVisible();

  // Move task to Done
  await page.click("text=Done");
  await expect(page.locator("text=E2E Task")).toBeVisible();
});
