import React from 'react'
import LocationSection from './LocationSection'
import DemographicsSection from './DemographicsSection'
import FiltersSection from './FiltersSection'

const MainContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'location':
        return <LocationSection />
      case 'demographics':
        return <DemographicsSection />
      case 'filters':
        return <FiltersSection />
      default:
        return <LocationSection />
    }
  }

  return (
    <div className="main-content">
      {renderSection()}
    </div>
  )
}

export default MainContent