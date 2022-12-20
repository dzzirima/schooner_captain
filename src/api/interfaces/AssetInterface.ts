
interface IAsset{
    
    assetId: string | null |number,
    ownerId:string,
    type: AssetType;
    webPath: string ;
    isFavorite: boolean;
    duration:string;
    originalPath: string
   
}

export enum AssetType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    OTHER = 'OTHER',
  }


export default IAsset;