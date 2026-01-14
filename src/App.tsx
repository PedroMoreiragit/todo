import Text from "./components/text";

export default function App() {


  return (
    <>
      <div className="flex flex-col gap-2">
        <Text variant={"body-sm-bold"} className="text-pink-base">Hello World!</Text>
        <Text className="text-green-base">Hello World!</Text>
        <Text variant={"body-md-bold"}>Hello World!</Text>
        <Text variant={"body-md-bold"}>Levar o dog para passear</Text>
      </div>
    </>
  )
}
