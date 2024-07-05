import Loader from 'react-loader-spinner'
import './index.css'

const LoaderComponent = () => (
  <div className="loader">
    <Loader
      type="Oval"
      color="#00BFFF"
      secondaryColor="#00BFFF"
      width={80}
      height={80}
    />
  </div>
)

export default LoaderComponent
