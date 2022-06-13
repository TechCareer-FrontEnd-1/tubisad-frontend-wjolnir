let nowDateDay = () => {
  let nowDay = new Date().getDay()
  switch (nowDay) {
    case 0:
      document.write('<br>' + 'Bugün günlerden Pazar');
      break
    case 1:
      document.write('<br>' + 'Bugün günlerden Pazartesi');
      break
    case 2:
      document.write('<br>' + 'Bugün günlerden salı');
      break
    case 3:
      document.write('<br>' + 'Bugün günlerden çarşamba');
      break
    case 4:
      document.write('<br>' + 'Bugün günlerden Perşembe');
      break
    case 5:
      document.write('<br>' + 'Bugün günlerden Cuma');
      break
    case 6:
      document.write('<br>' + 'Bugün günlerden Cumartesi');
      break

    default:
      document.write('<br>' + 'Günlerden belirtilen aralıkta giriniz');
      break
  }
}

nowDateDay();