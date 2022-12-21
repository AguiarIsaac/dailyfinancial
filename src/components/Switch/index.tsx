import * as Switch from '@radix-ui/react-switch';
import { Moon, Sun } from 'phosphor-react';
import { FormElement } from './styles';

interface SwitchProps {
  setChangeTheme: (newState: boolean) => void
  changeTheme: boolean
}

export function SwitchElement({setChangeTheme, changeTheme}: SwitchProps) {

  function handleClick() {
    if(changeTheme === false) {
      setChangeTheme(true)
    } else {
      setChangeTheme(false)
    }
  }
  
  return (
      <FormElement>
      <div>
        {changeTheme ? <Moon />: <Sun color='#C5A34A'/>}
        <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
          Tema:
        </label>
        <Switch.Root className="SwitchRoot" id="airplane-mode" title='tema' onClick={() => {handleClick()}}>
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
    </FormElement>
  )
}