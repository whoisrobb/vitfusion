
const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full aspect-square overflow-hidden">
            <img
                className="h-full w-full object-cover"
                src="https://utfs.io/f/40e36e01-a032-475d-8710-4bb32ac32e18-3snr3a.png"
                alt=""
            />
        </div>
        <div className="w-full aspect-square overflow-hidden">
            <img
                className="h-full w-full object-cover"
                src="https://utfs.io/f/f253135a-231d-4c84-b9bf-01d12017d8c8-a34qko.png"
                alt=""
            />
        </div>
    </div>
  )
}

export default ImageGrid
