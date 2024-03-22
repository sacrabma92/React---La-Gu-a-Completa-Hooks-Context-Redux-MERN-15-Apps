describe('Pruebas en <DemoComponent>', () => {
  test('Prueba message', () => {
    // 1. Inicializacion
    const message1 = 'Hola Mundo'
  
    // 2. estímulo
    const message2 = message1.trim()
  
    // 3. Observar el comportamiento...esperado
    expect( message1 ).toBe( message2 )
  })
})

