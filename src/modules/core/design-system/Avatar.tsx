export default function Avatar(props: React.PropsWithChildren<any>) {
  return (
    <img
      className={`min-h-8 min-w-8 rounded-full bg-blue-200 ${props.className}`}
    />
  );
}
