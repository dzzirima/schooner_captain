
interface IAsset{
    
    assertId: string | null |number,
    userId:string,
    type: AssetType;
    webpPath: string | null;
    isFavorite: boolean;
    duration:string | null;
    originalPath: string
   
}

export enum AssetType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    OTHER = 'OTHER',
  }


export default IAsset;