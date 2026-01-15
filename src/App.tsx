import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react"
import CheckIcon from "./assets/icons/check.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react"
import XIcon from "./assets/icons/x.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";

export default function App() {


  return (
    <>
      <div className="grid gap-3">
        <div className="flex flex-col gap-2">
          <Text variant={"body-sm-bold"} className="text-pink-base">Hello World!</Text>
          <Text className="text-green-base">Hello World!</Text>
          <Text variant={"body-md-bold"}>Hello World!</Text>
          <Text variant={"body-md-bold"}>Levar o dog para passear</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={XIcon} />
          <Icon svg={CheckIcon} />
          <Icon svg={SpinnerIcon} animate />
        </div>

        <div>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon}/>
          <ButtonIcon icon={TrashIcon} variant="secondary"/>
          <ButtonIcon icon={TrashIcon} variant="tertiary"/>
        </div>
      </div>
    </>
  )
}
