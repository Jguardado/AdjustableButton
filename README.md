### AdjustableButton

This repo is a simple UI button that can be set to a certain size based on how many columns the user decides. This component if part of the ComponentBase Library of reusable component.

npm:
```sh
npm install adjustable-react-ui-button --save
```
To run the demo simply:

```sh
npm run build-demo
npm run demo
```

#### Usage
```sh
  <AdjustableButton
    handleClick={() => { console.log('passed check func');}}
    columns={4}
    value="example button"
    />
```

The above example shows the component being used to render a button capable of being set inline as four columns. However the component does not automatically assume that the user wants any button to b inline. That is why we have included the option of adding personalized styling classes to the component. To do so:

```sh
  <AdjustableButton
    handleClick={() => { console.log('passed check func');}}
    columns={4}
    value="example button"
    addedClassName="whatever style definitions you want"
    />
```

As you may notice the `handleClick` function above takes in a give function to be used as the `onClick` for the AdjustableButton. In the example we use a simple console.log call back. You can pass whatever function you'd like.    
