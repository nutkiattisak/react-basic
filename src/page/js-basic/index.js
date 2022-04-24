const Index = () => {
  const data = [
    {
      id: 1,
      name: 'map 1',
    },
    {
      id: 2,
      name: 'map 2',
    },
    {
      id: 3,
      name: 'map 3',
    },
  ]

  const mapExample = (data) => {
    return data.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Map</h1>
      <p>Map คือเมธอดสำหรับ สร้างอาร์เรย์ใหม่ ที่เติมด้วยผลลัพธ์ของทุกค่า จากอาร์เรย์ที่ใช้เรียก</p>
      {mapExample(data)}
    </div>
  )
}

export default Index
