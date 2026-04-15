import { useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useTheme } from '../context/ThemeContext'
import { storesList, storeCoords } from '../data/media'

const darkTiles = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
const lightTiles = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'

function createIcon() {
  return L.divIcon({
    className: 'axon-leaflet-marker',
    html: `<div style="width:14px;height:14px;background:#3B82F6;border:2px solid #f5f5f5;border-radius:2px;box-shadow:0 0 12px rgba(59,130,246,0.6)"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  })
}

export default function ContactMap() {
  const { isDark } = useTheme()
  const icon = useMemo(() => createIcon(), [])
  const center = useMemo(() => [25, 10], [])

  return (
    <section className="border-t border-[var(--axon-card-border)] bg-[var(--axon-bg)] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="mb-8 font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,6vw,4rem)] tracking-[0.12em] text-[var(--axon-text)]">
          FLAGSHIP MAP
        </h2>
        <div className="overflow-hidden rounded-[3px] border border-[var(--axon-card-border)]">
          <MapContainer
            center={center}
            zoom={2}
            minZoom={2}
            maxBounds={[
              [-60, -180],
              [75, 180],
            ]}
            scrollWheelZoom
            style={{ height: 'min(480px, 70vh)', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              key={isDark ? 'dark' : 'light'}
              attribution={attribution}
              url={isDark ? darkTiles : lightTiles}
            />
            {storesList.map((s) => {
              const pos = storeCoords[s.city]
              if (!pos) return null
              return (
                <Marker key={s.city} position={pos} icon={icon}>
                  <Popup>
                    <strong className="font-[family-name:var(--font-barlow)] uppercase tracking-wider">
                      {s.city}
                    </strong>
                    <div className="mt-1 max-w-[200px] text-sm font-light text-[var(--axon-muted)]">
                      {s.address}
                    </div>
                  </Popup>
                </Marker>
              )
            })}
          </MapContainer>
        </div>
      </div>
    </section>
  )
}
