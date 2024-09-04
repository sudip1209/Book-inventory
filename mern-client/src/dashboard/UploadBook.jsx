import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
const UploadBook = () => {
  const bookCategories = [
    "Friction",
    "Non-Friction",
    "Science",
    "Mistery",
    "Horror",
    "Romance",
    "Biography",
    "History",
    "Technology",
    "Progamming",
    "Non-Progamming",
    "self-help",
    "Health",
    "Business",
    "Children Books",
    "Travel",
    "Art",
    "Photography",
    "Regional",
    "Other",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handelChangeSelectedBookCategory = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // handel book submission
  const handleBookSubmission = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const category = form.categoryName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFUrl,
    };
    console.log(bookObj);
    // send data to db
    fetch("http://localhost:8000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book uploaded sucessfully!!");
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form
        onSubmit={handleBookSubmission}
        className="flex lg:w-[1080px] flex-col flex-wrap gap-4"
      >
        {/* first row  */}

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book name"
              required
              type="text"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author name"
              required
              type="text"
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Book Image URL"
              required
              type="text"
            />
          </div>
          {/* catogary */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handelChangeSelectedBookCategory}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Descriptions" />
          </div>

          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description"
            required
            className="w-full"
            row={6}
          />
        </div>
        {/* book PDF link */}
        <div className="mb-2 block">
          <Label htmlFor="bookPDFUrl" value="Book PDF URL" />
        </div>
        <TextInput
          id="bookPDFUrl"
          name="bookPDFUrl"
          placeholder="book url pdf"
          required
          type="text"
        />
        <Button type="submit" className="mt-5 bg-blue-700 hover:bg-blue-500">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
