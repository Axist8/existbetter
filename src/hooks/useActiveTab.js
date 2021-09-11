import {useState} from 'react'

function useActiveTab() {
    const [activeTab, setActiveTab] = useState(true)

    function handleSwitch() {
        setActiveTab(!activeTab)
    }

    return [activeTab, handleSwitch]
}

export default useActiveTab