#React Expandable Preview

##Description


##Installation

To install react expandable preview simply type the following in your terminal:
```
npm install react-expandable-preview --save
```

##Usage Overview


##Components & Props

####1. Expandable:
  - *Description*: This component is the base component for the expandable preview. Wrap everything in this.
  - *Props*:
    -
####2. Item:
  - *Description*: This component is the individual item in the grid you want to display. Wrap your image or grid item in here.
  - *Props*:

####3. Preview:
  - *Description*: This component is the preview item you want to display when clicking on its related item in the grid. Wrap this component around your preview data and pass it in as the `previewComponent` prop in the respective `<Item />` component.
  - *Props*:
    - `title`:
      - type: String
      - Description: Simple string title you want the preview to display when it expands.