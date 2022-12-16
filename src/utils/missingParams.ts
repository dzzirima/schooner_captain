export default (requiredPars: string[], passedPars: any) : string[] => {
    return requiredPars.filter((par: any) => passedPars[par] === null || passedPars[par] === undefined);
}