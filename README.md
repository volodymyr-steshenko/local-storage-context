# Custom hooks

## For run app

`npm install`

`npm start`

## Task description

###Challenge:
Create a hook to store a state variable to local storage. 

This state variable should be loaded upon every startup, and updated with every change when the app is running.

The state variable should support multiple types (strings, numbers & booleans). The hook should be typed and it should be a template.

Using this hook, create a SettingsContext that stores settings and a useSettingsContext hook to let its children have access to the settings. 

The settings should be stored in local storage. If the useSettingsContext hook is used outside the Context, throw an exception.

Example settings: 
```
volume (float) 
currentSong (string) 
analyticsOn (boolean)
```

Use TypeScript (and React) for this task. 

For any uncertainties, use your best judgement and feel free to explain how you made your design decisions.

Please submit your code and a screen capture of the code working.

