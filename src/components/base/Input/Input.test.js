import ReactDOM from 'react-dom'
import { Input } from '.'

it('Input renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Input />, div)
})
