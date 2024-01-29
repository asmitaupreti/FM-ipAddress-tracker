import { useEffect, useState } from 'react'
import LeafletComponent from './LeafletComponent'
import arrow from './assets/icon-arrow.svg'
import bgDesktop from './assets/pattern-bg-desktop.png'

const url = `/.netlify/functions/api/`

function App() {
  const [location, setLocation] = useState({})
  const [search, setSearch] = useState('')

  function validIpAddress(ip) {
    const parts = ip.split(/[.:]/)

    if (parts.length === 4) {
      // Check IPv4 parts
      for (const part of parts) {
        const num = parseInt(part)
        if (isNaN(num) || num < 0 || num > 255) {
          return false
        }
      }
      return true
    } else if (parts.length === 8) {
      // Check IPv6 parts
      for (const part of parts) {
        if (!/^[0-9a-fA-F]{1,4}$/.test(part)) {
          return false
        }
      }
      return true
    }
    return false
  }

  const prepareData = (searchInput) => {
    if (searchInput) {
      validIpAddress(searchInput) == true
        ? fetchData({ ipAddress: searchInput })
        : fetchData({ domain: searchInput })
    }
  }

  const fetchData = async (queryParams) => {
    try {
      let updatedUrl = url

      if (queryParams) {
        updatedUrl += '?' + new URLSearchParams(queryParams)
      }

      const response = await fetch(updatedUrl)
      const data = await response.json()

      setLocation(data)
      setSearch('')
    } catch (error) {
      console.error('Error fetching location data:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className=" max-h-screen  ">
      {/* Image container */}
      <div className=" bg-pattern-mobile  h-[380px] md:bg-pattern-desktop md:h-[400px]   relative  ">
        <img className="w-full h-full" src={bgDesktop} alt="Hero Image"></img>
        <div className="flex flex-col space-y-8 items-center z-30 absolute top-1/4 md:top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 md:-translate-y-1/2 ">
          <p className="font-rubik font-medium text-white text-3xl ">
            IP Address Tracker
          </p>

          <div className="flex items-center ">
            <div className="bg-white  rounded-l-2xl w-[350px] md:w-[500px] p-2 ">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for and IP address or domain"
                className="bg-transparent outline-none text-lg font-rubik w-full p-2"
              />
            </div>
            <div
              className=" bg-black rounded-r-2xl p-6"
              onClick={() => {
                prepareData(search)
              }}
            >
              <img src={arrow} />
            </div>
          </div>
        </div>
        <div className=" bg-transparent w-full flex justify-center absolute bottom-[-53%] md:bottom-0 z-20  ">
          <div
            className=" flex flex-col md:flex-row bg-white w-[25rem] md:w-[50rem] 
        items-center p-8   space-y-5 space-x-0 md:space-y-0 md:space-x-9 justify-evenly
        rounded-lg shadow-lg "
          >
            <div className=" md:p-1 space-y-2 ">
              <p className="text-gray-400 text-xs font-rubik font-bold text-center">
                IP ADDRESS
              </p>
              <p className="text-black text-md font-rubik font-semibold text-center">
                {location?.ip || ''}
              </p>
            </div>

            <div className="bg-slate-300 w-[1px] h-full"></div>
            <div className="md:p-1 space-y-2">
              <p className="text-gray-400 text-xs font-rubik font-bold text-center">
                LOCATION
              </p>
              <p className="text-black text-md font-rubik font-semibold text-center  ">
                {location?.location?.city || ''},
                {location?.location?.region || ''} <br />
                {location?.location?.postalCode || ''}
              </p>
            </div>

            <div className="bg-slate-300 w-[1px] h-full"></div>
            <div className="md:p-1 space-y-2">
              <p className="text-gray-400 text-xs font-rubik font-bold text-center">
                TIMEZONE
              </p>
              <p className="text-black text-md font-rubik font-semibold text-center">
                {`UTC ${location?.location?.timezone || ''}`}
              </p>
            </div>

            <div className="bg-slate-300 w-[1px] h-full"></div>
            <div className="md:p-1 space-y-2">
              <p className="text-gray-400 text-xs font-rubik font-bold text-center">
                ISP
              </p>
              <p className="text-black text-md font-rubik font-semibold text-center">
                {location?.isp || ''}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* data container */}

      {/* leaflet  container */}
      <LeafletComponent data={location} />
    </div>
  )
}

export default App
