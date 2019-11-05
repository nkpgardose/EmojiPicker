main component that renders every components that built EmojiPicker

```jsx
<EmojiPicker
  onEmojiPick={emoji =>
    alert(
      `Example Emoji result: ${
        emoji.char
      } & stringify result: \n${JSON.stringify(emoji)}`
    )
  }
/>
```

To use the component `npm install @EmojiPicker/main`
