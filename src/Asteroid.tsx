interface AsteroidProps {
  x: number;
  y: number;
}
export function Asteroid(props: AsteroidProps) {
  return (
    <div style={{ position: "absolute", left: props.x, top: props.y }}>☄</div>
  );
}
