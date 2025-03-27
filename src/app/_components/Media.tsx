import { useState } from "react";

const Media = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...files]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-sm">
      <h3 className="text-l font-bold text-gray-700 mb-4">Media</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Photo
        </label>
        <div className="border-2 border-dashed border-gray-300 p-3">
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  className="w-full h-30 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0.5 right-0 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div className="p-4 text-center rounded-md cursor-pointer">
            <div className="mb-4">
              <p className="text-gray-500 text-xs mb-4">
                Drag and drop your image here, or click add image
              </p>

              <label
                htmlFor="file-upload"
                className="flex items-center px-2 py-2 text-[14px] bg-blue-200 text-blue-800  cursor-pointer rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                style={{ margin: "auto", width: "fit-content" }}
              >
                <span className="material-symbols-outlined">add</span>
                <span>Add Photo</span>
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
