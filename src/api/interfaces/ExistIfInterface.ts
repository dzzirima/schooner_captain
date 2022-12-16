/**
 * This interface only exists if an entry is of type image or video
 *
 */

interface IExistIf {
  exifId: string;
  assetId: string;

  /** general infor */
  description: string;
  fileSizeInBytes: number | null;
  imageHeight: number | null;
  imageWidth: number | null;
  orientation: string | null;
  dateTimeOriginal: Date | null;
  longitude: number | null;
  latitude: number | null;
  city: string | null;
  state: string | null;
  country: string | null;

  /**
   * 1 to one link  to Asset
   */
}


export default IExistIf
