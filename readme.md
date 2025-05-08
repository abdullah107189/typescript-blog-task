## 🎯 Interview Questions - Blog Task


### ❓ What is the difference between `any`, `unknown`, and `never`?

1. **`any`**
   - Can be **anything** (string, number, object, etc.)
   - No checking by TypeScript
   - You can do anything with it — good for quick code, but risky!

   ✅ Example:
   ```ts
   let a: any = 5;
   a = "hello"; // No error
   ```

2. **`unknown`**
   - TypeScript **doesn’t know** the type yet
   - You **must check** the type before using
   - Safer than `any`

   ✅ Example:
   ```ts
   let b: unknown = "text";
   if (typeof b === "string") {
     console.log(b.toUpperCase());
   }
   ```

3. **`never`**
   - Means something will **never happen**
   - Used in functions that throw errors or never end

   ✅ Example:
   ```ts
   function throwError(): never {
     throw new Error("This will stop everything!");
   }
   ```


📝 Example:

```ts
let a: any = 5;
let b: unknown = "hello";
let c: never; // used for errors or things that never return
```



### ❓  How does TypeScript help in improving code quality and project maintainability?

✅ It finds mistakes before you run the code.  
✅ It makes your code clean and easy to understand.  
✅ It helps you and your team write better code.
