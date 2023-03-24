import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AssetEdit from "./AssetEdit"

function AssetConfig() {
  const {assets}=useSelector(state=>state.assets)
const assetId=useParams().id

    return (
    <AssetEdit asset={assets[assetId-1]}/>
  )
}

export default AssetConfig