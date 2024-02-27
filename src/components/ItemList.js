import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-b border-gray-300 text-left flex justify-between relative"
          >
            <div className="flex-grow w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="relative p-4 w-3/12">
              <button className="bg-slate-100 px-4 text-orange-400 border border-orange-200 rounded-lg absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
                + Add
              </button>
              {item?.card?.info?.imageId && (
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-full"
                  alt="Item"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
