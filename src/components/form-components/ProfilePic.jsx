export function PhotoInput(props) {
    const handleImageChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const reader = new FileReader(); 
            reader.onloadend = () => {
                props.setPicture(reader.result); 
            };
            reader.readAsDataURL(file); 
        }
    };
    return (
        <div className="photo-input">
        <label htmlFor="imageInput">Click to upload an image</label>
        <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            />
       </div>
    )
}