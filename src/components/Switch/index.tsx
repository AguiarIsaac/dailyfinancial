import * as Switch from '@radix-ui/react-switch';
import { FormElement } from './styles';

export function SwitchElement() {
  return (
      <FormElement>
      <div>
        <Switch.Root className="SwitchRoot" id="airplane-mode" title='tema'>
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
    </FormElement>
  )
}