import { test, expect } from '@playwright/test';

const baseUrl = "https://jsonplaceholder.typicode.com";

test("get users endpoint test", async ({ request }) => {
   const resp = await request.get(`${baseUrl}/users`);
   console.log(await resp.json());
    expect(resp.status()).toBe(200);

    // await validateSchemaZod({ request }, resp, getUsersSchema);
});