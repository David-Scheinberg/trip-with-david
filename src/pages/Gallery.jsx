import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import MyButton from '../component/MyButton'

import MyGallery from '../component/MyGallery'
import tourGallery from "../tourGallery.json"

const Gallery = () => {
  const pageJson = tourGallery;
  const IMG_PER_PAGE = 6;
  const [arr, setArr] = useState(pageJson.slice(0, IMG_PER_PAGE));
  const [start, setStart] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [choice, setChoice] = useState("Country");
  const [totalPages, setTotalPages] =
    useState(Math.ceil(pageJson.length / IMG_PER_PAGE));
  const [filterArr, setFilterArr] = useState(pageJson);
  const [activeButton, setActiveButton] = useState(1);
  const [buttonNumber, setButtonNumber] = useState(1);

  const filterArray = () => {
    let newArray = pageJson.filter((item) => {
      if (choice == "Country")
        return item.Country.toLocaleLowerCase().includes(
          searchValue.toLocaleLowerCase());
      if (choice == "State")
        return item.State.toLocaleLowerCase().includes(
          searchValue.toLocaleLowerCase());
      if (choice == "name")
      return item.name.toLocaleLowerCase().includes(
      searchValue.toLocaleLowerCase());
      if (choice == "price") {
        let temp = item.price.substring(13, 21);
        temp = temp.replace(",", "");
        temp = temp.replace("$", "");

        return Number(temp) <= Number(searchValue);
      }

    })
    return newArray;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterArr = filterArray();
    setArr(filterArr.slice(0, IMG_PER_PAGE));
    setFilterArr(filterArr);
    setTotalPages(Math.ceil(filterArr.length / IMG_PER_PAGE));
  }

  const createPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <MyButton
          key={i}
          onEach={onEachBtn}
          number={i}
          activeButton={activeButton} />
      );
    }
    return buttons;

  };

  const onEachBtn = (pageNum) => {
    const startIndex = (pageNum - 1) * IMG_PER_PAGE;
    const endIndex = startIndex + IMG_PER_PAGE;
    const tempArr = filterArr.slice(startIndex, endIndex);
    setArr(tempArr);
    setStart(startIndex);
    setActiveButton(pageNum);
    setButtonNumber(pageNum);

  }

  const onNextBtn = () => {
    const startIndex = start + IMG_PER_PAGE;
    const tempArr = filterArr.slice(startIndex,
      startIndex + IMG_PER_PAGE);
    setArr(tempArr);
    setStart(startIndex);
    setButtonNumber(buttonNumber + 1);
    setActiveButton(buttonNumber + 1);
  };

  const onBackBtn = () => {
    const startIndex = start - IMG_PER_PAGE;
    const tempArr = filterArr.slice(startIndex, startIndex + IMG_PER_PAGE);
    setArr(tempArr);
    setStart(startIndex);
    setButtonNumber(buttonNumber - 1);
    setActiveButton(buttonNumber - 1);
  };





  const createAllImg = (arr) => {
    const compsArr =
      arr.map((item) => {
        return <MyGallery
          key={item.id}
          image={item.image}
          Country={item.Country}
          State={item.State}
          name={item.name}
          price={item.price}
        />
      });
    return compsArr;
  }

  return (
    <div>
      <Header />

      <main className="container-fluid bg-light">
        <form onSubmit={handleSubmit} className='text-center pt-4 '>
          <input onChange={(e) =>
            setSearchValue(e.target.value)} type="text" className=' w-25 m-auto' />

          <select onChange={(e) =>
            setChoice(e.target.value)} className='m-2'>
            <option value='Country'>Country</option>
            <option value='State' >State</option>
            <option value='name'>Name</option>
            <option value='price'>Price</option>
          </select>
          <button className='btn btn-warning'>Search</button>
        </form>
        <div className="container text-center">
          <div className="container mt-4 mb-4 ">
            <div className="row  justify-content-evenly">
              {createAllImg(arr)}
            </div>
          </div>
        </div>
        <div className='justify-content-center d-flex'>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <button class="page-item page-link bg-danger" onClick={onBackBtn} disabled={start === 0}>Back</button>
              {createPaginationButtons()}
              <button class="page-item page-link bg-info" onClick={onNextBtn} disabled={start + IMG_PER_PAGE >= filterArr.length}>Next</button>
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </div >
  )
}


export default Gallery