1. rgba($variable, $opacity)
2. ```diff
       @mixin focused-ring($ring-color) {
   -    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px $ring-color, 0 1px 2px 0 rgba(0, 0, 0, 1.0);
   +    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px $ring-color
   }
   ```
3. scale-color($<theme>ButtonBg, $lightness: 50%)
