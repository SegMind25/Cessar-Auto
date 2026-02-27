import { Link } from 'react-router-dom';
import { Users, Gauge, Fuel, Calendar, MapPin } from 'lucide-react';

const CarCard = ({ car }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${car.price}/day
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {car.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{car.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{car.year} Model</p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2 text-primary-600" />
            {car.passengers} Seats
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Gauge className="w-4 h-4 mr-2 text-primary-600" />
            {car.transmission}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Fuel className="w-4 h-4 mr-2 text-primary-600" />
            {car.fuel}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-primary-600" />
            {car.year}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
          {car.features.length > 2 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              +{car.features.length - 2} more
            </span>
          )}
        </div>
        
        <Link
          to="/contact"
          state={{ selectedCar: car }}
          className="block w-full text-center btn-primary"
        >
          <MapPin className="w-4 h-4 inline mr-2" />
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
