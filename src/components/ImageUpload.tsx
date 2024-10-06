import React, { useState } from 'react'
import { Camera, Upload } from 'lucide-react'

interface ImageUploadProps {
  onUpload: (image: string) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
        onUpload(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="mb-6">
      <label className="block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-center mb-8">
        Upload a photo for personalized fashion recommendations
      </label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          {previewImage ? (
            <img src={previewImage} alt="Preview" className="w-full object-contain rounded-lg" />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Camera className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG or GIF</p>
            </div>
          )}
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
        </label>
      </div>
    </div>
  )
}

export default ImageUpload
