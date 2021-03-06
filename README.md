#React Expandable Preview

##Description


##Installation

To install react expandable preview simply type the following in your terminal:
```
npm install react-expandable-preview --save
```

##Usage Overview

```javascript
<Expandable largeRowItemCount={4}>
  <Item
    previewComponent={
      <Preview title="The Cutest Cat Ever">
        <img src="https://placekitten.com/300/201" />
        <p>Place your custom Components inside the preview</p>
      </Preview>
    }
  >
    <img src="https://placekitten.com/300/201" />
  </Item>
  {... more <Item /> Components Here}
</Expandable>
```


##Components & Props

####1. Expandable:
  - **Description**: This component is the base component for the expandable preview. Wrap everything in this.
  - **Props**:
    - *Custom Grid System*:
      - react expandable preview contains a custom grid system to be as platform agnostic as possible. You can specify how many items you want per row based on the screen size by using the following props
        - `smallRowItemCount`:
          - Type: Number
          - Default: `1`
          - Description: for screens less than or equal to `640px` wide
        - `mediumRowItemCount`:
          - Type: Number
          - Default: `2`
          - Description: for screens less than or equal to `1024px` wide
        - `largeRowItemCount`
          - Type: Number
          - Default: `3`
          - Description: for screens less than or equal to `1440px` wide
        - `xlargeRowItemCount`
          - Type: Number
          - Default: `4`
          - Description: for screens less than or equal to `1920px` wide
        - `xxlargeRowItemCount`
          - Type: Number
          - Default: `5`
          - Description: for screens greater than 1920px wide
        
    - *Callbacks*:
      - React Expandable Preview contains an event callback system that fires callbacks before, after or during* certain events. These callbacks can be accessed via props sent through the expandable component.
        - `beforePreviewOpen(isOpen)`:
          - Type: function
          - Parameters:
            - `isOpen`:
              - Type: Boolean
              - Returns true if a preview is already open.
          - Description: This callback fires after a grid element is clicked but before the preview displays itself.
        - `afterPreviewOpen`:
          - Type: function
          - Parameters:
            - `isOpen`:
              - Type: Boolean
              - Returns true if a preview is already open.
          - Description: This callback fires after a preview has been displayed.
        - *more callbacks coming soon...*
  
####2. Item:
  - **Description**: This component is the individual item in the grid you want to display. Wrap your image or grid item in here.
  - **Props**:
    - `previewComponent`
      - Type: Component
      - Description: This prop accepts <Preview /> as a component which, in turn wraps the rest of your content to be displayed in a preview.

####3. Preview:
  - **Description**: This component is the preview item you want to display when clicking on its related item in the grid. Wrap this component around your preview data and pass it in as the `previewComponent` prop in the respective `<Item />` component.
  - **Props**:
    - `title`:
      - Type: String
      - Description: Simple string title you want the preview to display when it expands.
      
####4. Demo Instructions
  to setup the demo follow the steps below:
  1. clone or download this repo into a directory of your choice.
  2. in the root directory of this repo type: `npm install`
  3. next run webpack by typing: `webpack` 
    - Note: if an error occurs at this stage type: `npm install webpack -g`. this will allow you to run webpack as a command.
  4. next start the small HTTP server by typing: `npm start`
  5. finally navigate to the example in your browser by going to: `localhost:3001`
  
  note: This demo will run only with Node version 4.0.0 and later.
      
####5. Todo / In Progress:

  - Animated open / close (90% complete)
  - Custom grid widths (75% complete)
  - Additional callback support. (30% complete)
  - Custom styling support. (30% complete)  
  