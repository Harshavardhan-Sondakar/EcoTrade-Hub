
const people = [
    {
      name: 'Harshavardhan Sondakar',
      usn: '02FE21BCS031',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
    },

    {
        name: 'Huzaifa Momin',
        usn: '02FE21BCS034',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      },

      {
        name: 'Shraddha Patil',
        usn: '02FE21BCS077',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h1>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MP1B-10</h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              
              
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.usn}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  