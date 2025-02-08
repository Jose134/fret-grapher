interface ToolbarProps {
  fretCount: number;
  stringCount: number;
  handleIncreaseFretCount: () => void;
  handleDecreaseFretCount: () => void;
  handleIncreaseStringCount: () => void;
  handleDecreaseStringCount: () => void;
}

const Toolbar = (props: ToolbarProps) => {
  return (
    <div>
      <button onClick={props.handleDecreaseFretCount}>-</button>
      <span>Frets: {props.fretCount}</span>
      <button onClick={props.handleIncreaseFretCount}>+</button>

      <button onClick={props.handleDecreaseStringCount}>-</button>
      <span>Strings: {props.stringCount}</span>
      <button onClick={props.handleIncreaseStringCount}>+</button>
    </div>
  )
}

export default Toolbar;