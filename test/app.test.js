test("task creation works", () => {
  let tasks = [];
  tasks.push({ text: "Task 1", done: false });
  expect(tasks.length).toBe(1);
});

test("link creation works", () => {
  let links = [];
  links.push({ name: "Google", url: "https://google.com" });
  expect(links[0].name).toBe("Google");
});