#React Expandable Preview

##Description


##Installation

To install react expandable preview simply type the following in your terminal:
```
npm install react-expandable-preview --save
```

##Usage Overview

```javascript
<Expandable colWidth={4}>
  <Item
    previewComponent={
      <Preview title="The Role of Business">
        <img src="https://placekitten.com/300/201" alt=""/>
        <p>Place your custom Components inside the preview</p>
      </Preview>
    }
  >
    <img src="https://placekitten.com/300/201" alt=""/>
  </Item>
</Expandable>
```


##Components & Props

####1. Expandable:
  - **Description**: This component is the base component for the expandable preview. Wrap everything in this.
  - **Props**:
  
####2. Item:
  - **Description**: This component is the individual item in the grid you want to display. Wrap your image or grid item in here.
  - **Props**:
    - `previewComponent`

####3. Preview:
  - **Description**: This component is the preview item you want to display when clicking on its related item in the grid. Wrap this component around your preview data and pass it in as the `previewComponent` prop in the respective `<Item />` component.
  - **Props**:
    - `title`:
      - type: String
      - Description: Simple string title you want the preview to display when it expands.