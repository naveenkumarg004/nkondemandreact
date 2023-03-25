import './index.css'

const TabItem = props => {
  const {tabDetails, getTabId, isSelected} = props
  const {tabId, displayText} = tabDetails

  const findTab = () => {
    getTabId(tabId)
  }
  const activeClassBtn = isSelected ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassBtn}`}
        onClick={findTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
