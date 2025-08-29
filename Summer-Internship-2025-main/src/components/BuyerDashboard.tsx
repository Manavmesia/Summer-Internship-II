// Import required libraries and components
import { motion } from 'framer-motion' // For smooth animations and transitions
import { useState } from 'react' // For managing component state
import { 
  // Navigation and UI icons
  ShoppingCart, Users, BarChart3, Calendar, MapPin, DollarSign,
  TrendingUp, AlertCircle, CheckCircle, Clock, Star, Settings, LogOut, Plus,
  Search, Filter, Eye, MessageSquare, FileText, Download, Upload, Crop,
  Warehouse, Car, UserCheck, Bell, Home, Menu, User, Shield, Heart,
  Package, Truck, CreditCard, Award, TrendingDown
} from 'lucide-react' // Icon library for consistent UI elements

// Main Buyer Dashboard Component - Provides comprehensive interface for crop buyers
const BuyerDashboard = () => {
  // State management for dashboard functionality
  const [activeTab, setActiveTab] = useState('overview') // Controls which section is currently displayed
  const [sidebarOpen, setSidebarOpen] = useState(false) // Controls mobile sidebar visibility
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false) // Controls sign out confirmation modal

  // Function to show sign out confirmation modal
  const handleSignOut = () => {
    setShowSignOutConfirm(true) // Opens the confirmation dialog
  }

  // Function to confirm sign out and redirect to home page
  const confirmSignOut = () => {
    window.location.href = '/' // Redirects user back to homepage
  }

  // Dashboard statistics data - Key metrics displayed in the overview section
  const dashboardStats = [
    { title: "Total Purchases", value: "18", change: "+4", icon: <ShoppingCart className="w-6 h-6" />, color: "text-orange-600", bgColor: "bg-orange-100" }, // Shows total number of crops purchased
    { title: "Active Orders", value: "5", change: "+2", icon: <Package className="w-6 h-6" />, color: "text-blue-600", bgColor: "bg-blue-100" }, // Shows current pending orders
    { title: "Saved Crops", value: "12", change: "+3", icon: <Heart className="w-6 h-6" />, color: "text-red-600", bgColor: "bg-red-100" }, // Shows crops in wishlist
    { title: "Total Spent", value: "$8,450", change: "+18%", icon: <DollarSign className="w-6 h-6" />, color: "text-purple-600", bgColor: "bg-purple-100" } // Shows total money spent on crops
  ]

  // Recent activities data - Shows user's latest actions and transactions
  const recentActivities = [
    { type: "purchase", message: "Rice crop purchased for $1,200", time: "2 hours ago", status: "success" }, // Successful crop purchase
    { type: "order", message: "Wheat order confirmed", time: "4 hours ago", status: "pending" }, // Order confirmation
    { type: "payment", message: "Payment completed for corn", time: "1 day ago", status: "success" }, // Payment completion
    { type: "offer", message: "Offer submitted for soybeans", time: "2 days ago", status: "pending" } // Offer submission
  ]

  // Available crops data - List of crops that buyers can purchase from farmers
  const cropListings = [
    { id: 1, name: "Wheat", farmer: "John Farmer", quantity: "500 kg", price: "$1.20/kg", status: "available", image: "🌾", rating: 4.8 }, // Wheat crop with details
    { id: 2, name: "Rice", farmer: "Sarah Smith", quantity: "300 kg", price: "$1.80/kg", status: "available", image: "🍚", rating: 4.9 }, // Rice crop with details
    { id: 3, name: "Corn", farmer: "Mike Johnson", quantity: "400 kg", price: "$0.90/kg", status: "limited", image: "🌽", rating: 4.7 }, // Corn crop with limited availability
    { id: 4, name: "Soybeans", farmer: "David Wilson", quantity: "200 kg", price: "$2.10/kg", status: "available", image: "🫘", rating: 4.6 } // Soybeans crop with details
  ]

  // Active orders data - Shows buyer's current and pending crop orders
  const activeOrders = [
    { id: 1, crop: "Wheat", farmer: "John Farmer", quantity: "500 kg", totalPrice: "$600", status: "confirmed", deliveryDate: "2024-01-15" }, // Confirmed wheat order
    { id: 2, crop: "Rice", farmer: "Sarah Smith", quantity: "300 kg", totalPrice: "$540", status: "shipped", deliveryDate: "2024-01-18" }, // Shipped rice order
    { id: 3, crop: "Corn", farmer: "Mike Johnson", quantity: "400 kg", totalPrice: "$360", status: "processing", deliveryDate: "2024-01-20" } // Processing corn order
  ]

  // Saved crops data - Buyer's wishlist and favorite crops for future purchase
  const savedCrops = [
    { id: 1, crop: "Organic Wheat", farmer: "John Farmer", price: "$1.25/kg", savedDate: "2 days ago", image: "🌾" }, // Organic wheat in wishlist
    { id: 2, crop: "Basmati Rice", farmer: "Sarah Smith", price: "$1.90/kg", savedDate: "3 days ago", image: "🍚" }, // Basmati rice in wishlist
    { id: 3, crop: "Sweet Corn", farmer: "Mike Johnson", price: "$0.95/kg", savedDate: "1 week ago", image: "🌽" } // Sweet corn in wishlist
  ]

  // Renders the main overview section with dashboard statistics and key information
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section - Hero banner with greeting and current date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Buyer! 🛒</h1>
            <p className="text-orange-100 text-lg">Here's what's happening with your purchases today</p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-orange-100">Today's Date</p>
              <p className="text-2xl font-bold">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid - Displays key metrics in responsive card layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => ( // Maps through dashboard statistics to create stat cards
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Activity Section - Two-column layout for spending trends and recent activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Chart - Visual representation of monthly spending with progress bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Spending Trend</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Month</span>
              <span className="text-2xl font-bold text-green-600">$8,450</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full" style={{ width: '72%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">+18% from last month</span>
              <span className="text-green-600 font-medium">$1,290 increase</span>
            </div>
          </div>
        </motion.div>

        {/* Recent Activities - List of user's latest actions with status indicators */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => ( // Maps through recent activities to display each one
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                {activity.status === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Clock className="w-4 h-4 text-yellow-600" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions and Notifications - Three-column layout for actions, insights, and status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions - Buttons for common buyer actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary text-left py-3 px-4">
              <Search className="w-4 h-4 mr-2 inline" />
              Browse Crops
            </button>
            <button className="w-full btn-outline text-left py-3 px-4">
              <Heart className="w-4 h-4 mr-2 inline" />
              View Saved Items
            </button>
            <button className="w-full btn-outline text-left py-3 px-4">
              <FileText className="w-4 h-4 mr-2 inline" />
              Order History
            </button>
          </div>
        </motion.div>

        {/* Market Insights - Purple gradient card showing price trends and market status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-4">Market Insights</h3>
          <div className="text-center">
            <div className="text-4xl mb-2">📊</div> {/* Market data emoji icon */}
            <div className="text-2xl font-bold mb-1">Price Trends</div> {/* Price trends heading */}
            <div className="text-purple-100">Wheat: +5% | Rice: +3%</div> {/* Current price changes */}
            <div className="mt-4 text-sm text-purple-100">
              <p>Best Time to Buy: Now</p> {/* Buying recommendation */}
              <p>Market Status: Stable</p> {/* Market condition */}
            </div>
          </div>
        </motion.div>

        {/* Delivery Status - Shows count of orders in different delivery stages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">In Transit</span> {/* Orders currently being delivered */}
              <span className="font-medium text-blue-600">2</span> {/* Count of in-transit orders */}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Scheduled</span> {/* Orders scheduled for delivery */}
              <span className="font-medium text-yellow-600">3</span> {/* Count of scheduled orders */}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivered</span> {/* Successfully delivered orders */}
              <span className="font-medium text-green-600">15</span> {/* Count of delivered orders */}
            </div>
            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">Updated 30 min ago</p> {/* Last update timestamp */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // Renders the Browse Crops section - Shows available crops for purchase
  const renderCrops = () => (
    <div className="space-y-6">
      {/* Header section with title and search button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Available Crops</h2> {/* Section title */}
          <p className="text-gray-600">Browse and purchase fresh harvest from farmers</p> {/* Section description */}
        </div>
        <button className="btn-primary inline-flex items-center">
          <Search className="w-4 h-4 mr-2" /> {/* Search icon */}
          Search Crops {/* Search button text */}
        </button>
      </div>

      {/* Grid layout for displaying crop cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cropListings.map((crop) => ( // Maps through available crops to create individual crop cards
          <motion.div
            key={crop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Crop header with emoji icon, name, and farmer */}
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{crop.image}</div> {/* Crop emoji icon */}
              <h3 className="text-lg font-semibold text-gray-900">{crop.name}</h3> {/* Crop name */}
              <p className="text-sm text-gray-600">by {crop.farmer}</p> {/* Farmer name */}
            </div>
            {/* Crop details section with quantity, price, rating, and status */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity:</span> {/* Quantity label */}
                <span className="font-medium">{crop.quantity}</span> {/* Available quantity */}
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span> {/* Price label */}
                <span className="font-medium text-green-600">{crop.price}</span> {/* Price per kg */}
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rating:</span> {/* Rating label */}
                <span className="font-medium text-yellow-600">{crop.rating}/5.0</span> {/* Farmer rating out of 5 */}
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span> {/* Status label */}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  crop.status === 'available' ? 'bg-green-100 text-green-800' : // Green for available
                  crop.status === 'limited' ? 'bg-yellow-100 text-yellow-800' : // Yellow for limited
                  'bg-gray-100 text-gray-800' // Gray for unavailable
                }`}>
                  {crop.status} {/* Status text */}
                </span>
              </div>
            </div>
            {/* Action buttons for crop interaction */}
            <div className="flex space-x-2">
              <button className="flex-1 btn-outline text-sm py-2">
                <Heart className="w-4 h-4 mr-1 inline" /> {/* Heart icon for wishlist */}
                Save {/* Save to wishlist button */}
              </button>
              <button className="flex-1 btn-primary text-sm py-2">Buy Now</button> {/* Purchase button */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Renders the My Orders section - Shows buyer's current and past crop orders
  const renderOrders = () => (
    <div className="space-y-6">
      {/* Header section with title and order history button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Orders</h2> {/* Section title */}
          <p className="text-gray-600">Track your current and past orders</p> {/* Section description */}
        </div>
        <button className="btn-primary inline-flex items-center">
          <FileText className="w-4 h-4 mr-2" /> {/* File icon */}
          Order History {/* Order history button */}
        </button>
      </div>

      {/* List of active orders with detailed information */}
      <div className="space-y-4">
        {activeOrders.map((order) => ( // Maps through active orders to create order cards
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Order header with package icon, crop name, and farmer */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-orange-600" /> {/* Package icon for order */}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{order.crop} Order</h3> {/* Order title with crop name */}
                    <p className="text-sm text-gray-600">Farmer: {order.farmer}</p> {/* Farmer name */}
                  </div>
                </div>
                {/* Order details grid with quantity, price, status, and delivery date */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Quantity:</span> {/* Quantity label */}
                    <p className="font-medium">{order.quantity}</p> {/* Ordered quantity */}
                  </div>
                  <div>
                    <span className="text-gray-600">Total Price:</span> {/* Total price label */}
                    <p className="font-medium text-green-600">{order.totalPrice}</p> {/* Order total cost */}
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span> {/* Status label */}
                    <p className={`font-medium ${
                      order.status === 'confirmed' ? 'text-green-600' : // Green for confirmed
                      order.status === 'shipped' ? 'text-blue-600' : // Blue for shipped
                      'text-yellow-600' // Yellow for processing
                    }`}>{order.status}</p> {/* Order status text */}
                  </div>
                  <div>
                    <span className="text-gray-600">Delivery:</span> {/* Delivery label */}
                    <p className="font-medium">{order.deliveryDate}</p> {/* Expected delivery date */}
                  </div>
                </div>
              </div>
              {/* Action buttons for order management */}
              <div className="flex flex-col space-y-2">
                <button className="btn-outline text-sm py-2 px-4">Track Order</button> {/* Track order button */}
                <button className="btn-primary text-sm py-2 px-4">View Details</button> {/* View order details button */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Renders the Saved Items section - Shows buyer's wishlist and favorite crops
  const renderSaved = () => (
    <div className="space-y-6">
      {/* Header section with title and description */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Saved Crops</h2> {/* Section title */}
        <p className="text-gray-600">Your favorite crops and wishlist items</p> {/* Section description */}
      </div>

      {/* Grid layout for displaying saved crop cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedCrops.map((crop) => ( // Maps through saved crops to create wishlist cards
          <motion.div
            key={crop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Saved crop header with emoji icon, name, and farmer */}
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{crop.image}</div> {/* Crop emoji icon */}
              <h3 className="text-lg font-semibold text-gray-900">{crop.crop}</h3> {/* Crop name */}
              <p className="text-sm text-gray-600">by {crop.farmer}</p> {/* Farmer name */}
            </div>
            {/* Saved crop details with price and saved date */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span> {/* Price label */}
                <span className="font-medium text-green-600">{crop.price}</span> {/* Current price */}
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saved:</span> {/* Saved date label */}
                <span className="font-medium">{crop.savedDate}</span> {/* When crop was saved */}
              </div>
            </div>
            {/* Action buttons for saved crop management */}
            <div className="flex space-x-2">
              <button className="flex-1 btn-outline text-sm py-2">Remove</button> {/* Remove from wishlist */}
              <button className="flex-1 btn-primary text-sm py-2">Buy Now</button> {/* Purchase saved crop */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Main content router - Determines which section to display based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview() // Shows dashboard overview with stats and activities
      case 'crops': return renderCrops() // Shows available crops for purchase
      case 'orders': return renderOrders() // Shows buyer's current and past orders
      case 'saved': return renderSaved() // Shows saved crops in wishlist
      default: return renderOverview() // Default to overview if no tab is selected
    }
  }

  // Main component return - Renders the complete buyer dashboard interface
  return (
    <div className="min-h-screen bg-gray-50"> {/* Main container with gray background */}
      {/* Top navigation bar with logo and user controls */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Mobile menu button and logo */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)} /* Toggles mobile sidebar */
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" /> {/* Hamburger menu icon for mobile */}
              </button>
              {/* Logo and brand name */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" /> {/* Shopping cart icon in logo */}
                </div>
                <span className="text-xl font-bold text-gray-900">FarmConnect</span> {/* Brand name */}
              </div>
            </div>
            
            {/* Right side - Notifications and user profile */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5" /> {/* Notification bell icon */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span> {/* Notification indicator */}
              </button>
              {/* User profile section */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-orange-600" /> {/* User avatar icon */}
                </div>
                <span className="text-sm font-medium text-gray-900">Buyer Pro</span> {/* User role/title */}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main layout container with sidebar and content */}
      <div className="flex">
        {/* Sidebar navigation - Fixed on mobile, static on desktop */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full' // Controls mobile sidebar visibility
        }`}>
          <div className="h-full flex flex-col">
            {/* Navigation menu items */}
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {/* Navigation menu items array with icons and labels */}
                {[
                  { id: 'overview', name: 'Overview', icon: <Home className="w-5 h-5" /> }, // Dashboard overview
                  { id: 'crops', name: 'Browse Crops', icon: <Crop className="w-5 h-5" /> }, // Available crops
                  { id: 'orders', name: 'My Orders', icon: <Package className="w-5 h-5" /> }, // Order management
                  { id: 'saved', name: 'Saved Items', icon: <Heart className="w-5 h-5" /> }, // Wishlist
                  { id: 'reports', name: 'Reports', icon: <BarChart3 className="w-5 h-5" /> }, // Analytics
                  { id: 'profile', name: 'Profile', icon: <User className="w-5 h-5" /> } // User profile
                ].map((item) => ( // Maps through navigation items to create menu buttons
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === item.id
                        ? 'bg-orange-100 text-orange-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <button 
                onClick={handleSignOut}
                className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:ml-0">
          <main className="py-6 px-4 sm:px-6 lg:px-8">
            {renderContent()}
          </main>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sign Out Confirmation Modal */}
      {showSignOutConfirm && (
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-75 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign Out</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to sign out? You'll be redirected to the home page.</p>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowSignOutConfirm(false)}
                  className="flex-1 btn-outline py-2"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmSignOut}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default BuyerDashboard
