import './styles.scss'

export const Grid = ({ children, ...otherProps }) => (
  <div className="grid" {...otherProps}>
    {children}
  </div>
)
