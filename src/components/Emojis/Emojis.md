Lists down set of emojis

```jsx
import { defaultProps } from "../EmojiPicker";

<div style={{ overflow: "scroll", height: "20em" }}>
  <Emojis
    emojis={defaultProps.emojis}
    results={[]}
    onEmojiPick={emoji =>
      alert(
        `Example Emoji result: ${
          emoji.char
        } & stringify result: \n${JSON.stringify(emoji)}`
      )
    }
  />
</div>;
```
