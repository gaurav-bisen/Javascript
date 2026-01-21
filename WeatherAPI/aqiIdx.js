function getAqiMessage(aqiIndex) {
    switch (aqiIndex) {
      case 1:
        return "Good air quality.";
      case 2:
        return "Moderate air quality.";
      case 3:
        return "Unhealthy for sensitive groups.";
      case 4:
        return "Unhealthy air.";
      case 5:
        return "Very unhealthy air.";
      case 6:
        return "Hazardous air quality.";
      default:
        return "Air quality data unavailable.";
    }
  }
  