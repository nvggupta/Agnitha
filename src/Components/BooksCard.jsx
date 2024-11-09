function BooksCard({elem}) {
    return (
      <div className='w-full flex justify-between items-center border-b-2 mt-2 p-5 bg-gray-500'> {/* Added bg-white, shadow-lg, and rounded-lg */}
        <div>
          <p className='font-semibold text-xl text-black'>{elem.title}</p> {/* Optional: make title bold */}
          <p className='text-gray-600 text-white'>{elem.author_name}</p> {/* Optional: change author name color */}
        </div>
        <img src={`https://covers.openlibrary.org/b/id/${elem.cover_i}-M.jpg`} alt='no Image' className='object-fit'/>
      </div>
    )
  }

  export default BooksCard;