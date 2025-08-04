Convert the below HTML/CSS code into React components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bankar - Delivering Your Cargo Worldwide</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/lucide@latest/dist/umd/lucide.js" rel="stylesheet">
</head>
<body class="bg-gray-50">
    <!-- Header Navigation -->
    <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex items-center">
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-gray-800 rounded-sm"></div>
                        <div class="w-4 h-4 bg-orange-500 rounded-sm -ml-2 mt-2"></div>
                        <span class="text-xl font-bold text-gray-800 ml-2">BANKAR.</span>
                    </div>
                </div>
                
                <!-- Navigation Links -->
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Track Package</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Services</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Locations</a>
                    <a href="#" class="text-gray-700 hover:text-gray-900 font-medium">Reviews</a>
                    <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
                        Contact us
                    </button>
                </nav>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="relative min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
            <div class="text-center">
                <!-- Main Heading -->
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
                    Delivering Your Cargo
                </h1>
                
                <!-- Worldwide with Globe Icon -->
                <div class="flex items-center justify-center mb-16">
                    <div class="bg-orange-100 rounded-full p-4 mr-6">
                        <svg class="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                    </div>
                    <span class="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500">Worldwide</span>
                </div>

                <!-- Search Form -->
                <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-20">
                    <!-- Pickup Location Input -->
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <input type="text" placeholder="Enter pickup location" class="w-80 pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700">
                    </div>

                    <!-- Destination Location Input -->
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <input type="text" placeholder="Enter destination location" class="w-80 pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700">
                    </div>

                    <!-- Search Button -->
                    <button class="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-xl">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Container Image Section -->
        <div class="absolute bottom-0 left-0 right-0">
            <div class="relative">
                <!-- 360° Badge -->
                <div class="absolute left-8 bottom-32 z-10">
                    <div class="bg-orange-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center">
                        <span class="text-lg font-bold">360°</span>
                        <svg class="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                    </div>
                </div>

                <!-- Decorative Elements -->
                <div class="absolute top-20 right-32">
                    <div class="w-6 h-6 border-2 border-orange-500 transform rotate-45"></div>
                </div>
                <div class="absolute top-32 right-16">
                    <div class="w-4 h-4 border-2 border-orange-500 rounded-full"></div>
                </div>
                <div class="absolute top-16 right-64">
                    <svg class="w-32 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 200 32">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 16 L180 16 M170 8 L180 16 L170 24"/>
                    </svg>
                </div>

                <!-- Container Image -->
                <div class="w-full h-96 bg-gradient-to-t from-gray-300 to-gray-400 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gray-600 opacity-80"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-full max-w-4xl h-64 bg-gray-700 rounded-lg shadow-2xl transform perspective-1000 rotateX-12">
                            <!-- Container ridges -->
                            <div class="w-full h-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-lg relative">
                                <div class="absolute inset-0 bg-repeat-x opacity-30" style="background-image: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 2%, transparent 4%)"></div>
                                <!-- Container doors -->
                                <div class="absolute right-0 top-0 w-1/3 h-full border-l-2 border-gray-800 bg-gradient-to-r from-gray-600 to-gray-500"></div>
                                <!-- Container handles -->
                                <div class="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-8">
                                    <div class="w-2 h-8 bg-gray-800 rounded"></div>
                                    <div class="w-2 h-8 bg-gray-800 rounded"></div>
                                    <div class="w-2 h-8 bg-gray-800 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
```