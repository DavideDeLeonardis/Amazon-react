const NavSelect = (props) => {
   return (
      <select className={props.classNames}>
         <option defaultValue="All">All</option>
         <option value="search-alias=arts-crafts-intl-ship">
            Arts &amp; Crafts
         </option>
         <option value="search-alias=automotive-intl-ship">Automotive</option>
         <option value="search-alias=baby-products-intl-ship">Baby</option>
         <option value="search-alias=beauty-intl-ship">
            Beauty &amp; Personal Care
         </option>
         <option value="search-alias=stripbooks-intl-ship">Books</option>
         <option value="search-alias=fashion-boys-intl-ship">
            Boys' Fashion
         </option>
         <option value="search-alias=computers-intl-ship">Computers</option>
         <option value="search-alias=deals-intl-ship">Deals</option>
         <option value="search-alias=digital-music">Digital Music</option>
         <option value="search-alias=electronics-intl-ship">Electronics</option>
         <option value="search-alias=fashion-girls-intl-ship">
            Girls' Fashion
         </option>
         <option value="search-alias=hpc-intl-ship">
            Health &amp; Household
         </option>
         <option value="search-alias=kitchen-intl-ship">
            Home &amp; Kitchen
         </option>
         <option value="search-alias=industrial-intl-ship">
            Industrial &amp; Scientific
         </option>
         <option value="search-alias=digital-text">Kindle Store</option>
         <option value="search-alias=luggage-intl-ship">Luggage</option>
         <option value="search-alias=fashion-mens-intl-ship">
            Men's Fashion
         </option>
         <option value="search-alias=movies-tv-intl-ship">
            Movies &amp; TV
         </option>
         <option value="search-alias=music-intl-ship">
            Music, CDs &amp; Vinyl
         </option>
         <option value="search-alias=pets-intl-ship">Pet Supplies</option>
         <option value="search-alias=instant-video">Prime Video</option>
         <option value="search-alias=software-intl-ship">Software</option>
         <option value="search-alias=sporting-intl-ship">
            Sports &amp; Outdoors
         </option>
         <option value="search-alias=tools-intl-ship">
            Tools &amp; Home Improvement
         </option>
         <option value="search-alias=toys-and-games-intl-ship">
            Toys &amp; Games
         </option>
         <option value="search-alias=videogames-intl-ship">Video Games</option>
         <option value="search-alias=fashion-womens-intl-ship">
            Women's Fashion
         </option>
      </select>
   );
};

export default NavSelect;
