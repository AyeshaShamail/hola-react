1. Can we use default export with named import.
-- No, you cannot use a default export with a named import in JavaScript. When you use a default export in a module, you typically import it using a default import statement, and you can give it any name you want. For example:

// Module.js
=> export default function myFunction()


You can import the default export like this:
=> import myFunction from './Module';


--With named imports, you're importing specific variables, functions, or objects from a module by their exact names, and you cannot use a default import syntax for them. For example:

// Module.js
export const anything = 'Anything';
export const something = 'Something';

You would import the named exports like this:
import { anything, something } from './Module';

-- If you want to use a default export alongside named imports, you can do so in two separate import statements:
import myFunction from './Module'; // Default import
import { anything, something } from './Module'; // Named imports
This allows you to use both the default export and specific named exports from the same module in your code.



2. What is difference btw named, default and * as export?
--
-- 1. Named Exports: Used to export multiple values, functions, or objects from a module by giving each export a name.
    export keyword is used with an exportedName to export specific items.
    Imported using curly braces {} with the corresponding names.

-- 2. Default Exports: Used to export a single value, function, or object as the default export for a module. export default syntax is used for the default export.
    Imported without curly braces, using any name you choose.

-- 3. * as Export: Used to export all exports from a module as a single object.
    export * as moduleName syntax is used.
    Imported using the chosen moduleName to access all exports as properties of that object.

3.What is the importance of config.js file?
-- Also known as common.js which can be used to store common links or URL's.
    Components should be in SNAKE case i.e CDN_URL.
    Config. js allows developers to configure their applications in an XML block instead of hard-coding values inside their scripts or in JSON objects.

4.What are React Hooks?
--Hook is just a normal JavaScript function which is pre-built and has logic built inside it. It is an utility function given by React.
    React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

5. Why do we need useState Hooks?
-- useState - used to generate super powerful react variables and state variable. It maintains the state of the component.It is a spacial state/react variable.
-- The super powerful variable keeps the UI in sync with the data layer.
-- As soon as the state variable updates, react re-renders the components and very optimized way.