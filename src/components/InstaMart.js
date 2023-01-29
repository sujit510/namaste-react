import React, { useState } from 'react'

const Section = ({ title, description, isVisible, showHideHandler }) => {
  // const [isVisible, setIsVisible] = useState(false);
  const showMoreClassName = 'text-sm underline cursor-pointer';
  return (
  <div className='border-gray-200 bg-gray-100 p-4 m-1'>
    <h3 className='text-lg font-bold'>{title}</h3>
    {isVisible ? <h3 className={showMoreClassName} onClick={showHideHandler}>Hide</h3>
    : <h3 className={showMoreClassName} onClick={showHideHandler}>Show </h3>}
    {isVisible && <div className=''>{description}</div>}
  </div>
)}

export default InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState('about');

  return (
    <div className=''>
        <h3 className='text-2xl ml-4 font-extrabold'>Instamart</h3>
        <Section
          isVisible={visibleSection === 'about'}
          showHideHandler={() => setVisibleSection(visibleSection === 'about' ? '' : 'about')}
          title="About Instamart"
          description="Instamart is a groccery application built by Swigyg. This is Test Description for this section. It contains multiple words and multile sentences"
        />
        <Section
          isVisible={visibleSection === 'team'}
          showHideHandler={() => setVisibleSection(visibleSection === 'team' ? '' : 'team')}
          title="Team"
          description="We have a well skilled team working on this. This is Test Description for this section. It contains multiple words and multile sentences"
        />
        <Section
          isVisible={visibleSection === 'careers'}
          showHideHandler={() => setVisibleSection(visibleSection === 'careers' ? '' : 'careers')}
          title="Careers"
          description="Want to join us? This is Test Description for this section. It contains multiple words and multile sentences"
        />
    </div>
  )
}
