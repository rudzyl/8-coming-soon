function imputValidation(data) {
    if (!Array.isArray(data)) {
            console.error('ERROR: social ikonom generuoti reikia array tipo duomenu.');
            return false;
        }
        if (data.length === 0) {
            console.error('Error: social ikonom generuoti reikia netuscio arry tipo duomenu saraso.');
            return false;
        }
    return true;
}

export { imputValidation }